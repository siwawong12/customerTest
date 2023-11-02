SET FOREIGN_KEY_CHECKS = 0;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;

CREATE SCHEMA IF NOT EXISTS `similanTest` DEFAULT CHARACTER SET utf8 ;
USE `similanTest`;
DROP TABLE IF EXISTS `customer`;

create table `customer`(
	`cust_id` char(255),
    `cust_name` char(255),
    `cust_address` char(255),
    `cust_postcode` char(255),
    `cust_phone` char(255),
    `cust_fax` char(255),
    `cust_email` char(255),
    primary key (`cust_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;