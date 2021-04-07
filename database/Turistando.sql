-- MySQL Workbench Synchronization
-- Generated: 2021-04-06 21:20
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: moham

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE DATABASE IF NOT EXISTS turistandodb;
CREATE TABLE IF NOT EXISTS `turistandodb`.`Local` (
  `idLocal` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(255) NULL DEFAULT NULL,
  `localizacao` VARCHAR(100) NOT NULL,
  `cidade` VARCHAR(100) NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`idLocal`),
  UNIQUE INDEX `idLocal_UNIQUE` (`idLocal` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `turistandodb`.`Comentario` (
  `idComentario` INT(11) NOT NULL AUTO_INCREMENT,
  `autor` VARCHAR(45) NOT NULL,
  `conteudo` VARCHAR(255) NULL DEFAULT NULL,
  `Local_idLocal` INT(11) NOT NULL,
  PRIMARY KEY (`idComentario`, `Local_idLocal`),
  INDEX `fk_Comentario_Local1_idx` (`Local_idLocal` ASC) VISIBLE,
  CONSTRAINT `fk_Comentario_Local1`
    FOREIGN KEY (`Local_idLocal`)
    REFERENCES `turistandodb`.`Local` (`idLocal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `turistandodb`.`Imagem` (
  `idImagem` INT(11) NOT NULL AUTO_INCREMENT,
  `imagem` MEDIUMBLOB NOT NULL,
  `Comentario_idComentario` INT(11) NOT NULL,
  `Comentario_Local_idLocal` INT(11) NOT NULL,
  `Local_idLocal` INT(11) NOT NULL,
  PRIMARY KEY (`idImagem`, `Comentario_idComentario`, `Comentario_Local_idLocal`, `Local_idLocal`),
  INDEX `fk_Imagem_Comentario1_idx` (`Comentario_idComentario` ASC, `Comentario_Local_idLocal` ASC) VISIBLE,
  INDEX `fk_Imagem_Local1_idx` (`Local_idLocal` ASC) VISIBLE,
  CONSTRAINT `fk_Imagem_Comentario1`
    FOREIGN KEY (`Comentario_idComentario` , `Comentario_Local_idLocal`)
    REFERENCES `turistandodb`.`Comentario` (`idComentario` , `Local_idLocal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Imagem_Local1`
    FOREIGN KEY (`Local_idLocal`)
    REFERENCES `turistandodb`.`Local` (`idLocal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `turistandodb`.`Tag` (
  `idTag` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTag`),
  UNIQUE INDEX `idTag_UNIQUE` (`idTag` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `turistandodb`.`Local_has_Tag` (
  `Local_idLocal` INT(11) NOT NULL,
  `Tag_idTag` INT(11) NOT NULL,
  PRIMARY KEY (`Local_idLocal`, `Tag_idTag`),
  INDEX `fk_Local_has_Tag_Tag1_idx` (`Tag_idTag` ASC) VISIBLE,
  INDEX `fk_Local_has_Tag_Local1_idx` (`Local_idLocal` ASC) VISIBLE,
  CONSTRAINT `fk_Local_has_Tag_Local1`
    FOREIGN KEY (`Local_idLocal`)
    REFERENCES `turistandodb`.`Local` (`idLocal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Local_has_Tag_Tag1`
    FOREIGN KEY (`Tag_idTag`)
    REFERENCES `turistandodb`.`Tag` (`idTag`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;