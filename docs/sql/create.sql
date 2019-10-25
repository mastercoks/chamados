-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 25-Out-2019 às 21:57
-- Versão do servidor: 5.7.24-log
-- versão do PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chamados`
--
CREATE DATABASE IF NOT EXISTS `chamados` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `chamados`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `chamado`
--

CREATE TABLE `chamado` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `status` enum('Aberto','Cancelado','Resolvido') NOT NULL,
  `data_hora_abertura` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `funcionario_matricula` int(11) NOT NULL,
  `tipo_servico_cod_servico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionario`
--

CREATE TABLE `funcionario` (
  `matricula` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `setor_cod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `resolve`
--

CREATE TABLE `resolve` (
  `descricao` varchar(255) NOT NULL,
  `data_hora_vinculo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_hora_resolucao` datetime DEFAULT NULL,
  `funcionario_matricula` int(11) NOT NULL,
  `chamado_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `setor`
--

CREATE TABLE `setor` (
  `cod` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_servico`
--

CREATE TABLE `tipo_servico` (
  `cod_servico` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `prioridade` enum('Baixa','Media','Alta') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usou`
--

CREATE TABLE `usou` (
  `chamado_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chamado`
--
ALTER TABLE `chamado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_chamado_funcionario1_idx` (`funcionario_matricula`),
  ADD KEY `fk_chamado_tipo_servico1_idx` (`tipo_servico_cod_servico`);

--
-- Indexes for table `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`matricula`),
  ADD KEY `fk_funcionario_setor_idx` (`setor_cod`);

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resolve`
--
ALTER TABLE `resolve`
  ADD PRIMARY KEY (`funcionario_matricula`,`chamado_id`),
  ADD KEY `fk_resolve_chamado1_idx` (`chamado_id`);

--
-- Indexes for table `setor`
--
ALTER TABLE `setor`
  ADD PRIMARY KEY (`cod`);

--
-- Indexes for table `tipo_servico`
--
ALTER TABLE `tipo_servico`
  ADD PRIMARY KEY (`cod_servico`);

--
-- Indexes for table `usou`
--
ALTER TABLE `usou`
  ADD PRIMARY KEY (`chamado_id`,`produto_id`,`quantidade`),
  ADD KEY `fk_chamado_has_produto_produto1_idx` (`produto_id`),
  ADD KEY `fk_chamado_has_produto_chamado1_idx` (`chamado_id`);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `chamado`
--
ALTER TABLE `chamado`
  ADD CONSTRAINT `fk_chamado_funcionario1` FOREIGN KEY (`funcionario_matricula`) REFERENCES `funcionario` (`matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_chamado_tipo_servico1` FOREIGN KEY (`tipo_servico_cod_servico`) REFERENCES `tipo_servico` (`cod_servico`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD CONSTRAINT `fk_funcionario_setor` FOREIGN KEY (`setor_cod`) REFERENCES `setor` (`cod`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `resolve`
--
ALTER TABLE `resolve`
  ADD CONSTRAINT `fk_resolve_chamado1` FOREIGN KEY (`chamado_id`) REFERENCES `chamado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resolve_funcionario1` FOREIGN KEY (`funcionario_matricula`) REFERENCES `funcionario` (`matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `usou`
--
ALTER TABLE `usou`
  ADD CONSTRAINT `fk_chamado_has_produto_chamado1` FOREIGN KEY (`chamado_id`) REFERENCES `chamado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_chamado_has_produto_produto1` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
