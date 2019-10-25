-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 25-Out-2019 às 21:58
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

--
-- Extraindo dados da tabela `chamado`
--

INSERT INTO `chamado` (`id`, `descricao`, `status`, `data_hora_abertura`, `funcionario_matricula`, `tipo_servico_cod_servico`) VALUES
(1, 'Computador lento', 'Aberto', '2018-06-15 12:22:14', 20180004, 6),
(2, 'Programa travou ', 'Aberto', '2018-06-16 19:21:34', 20180001, 11),
(3, 'email não está abrindo', 'Aberto', '2018-06-23 13:34:12', 20180006, 7),
(4, 'Falha no sistema de ponto', 'Aberto', '2018-07-01 14:52:36', 20180003, 16),
(5, 'Sistema do sus travou', 'Aberto', '2018-08-02 14:27:59', 20180009, 17),
(6, 'Sem conexão com a internet', 'Resolvido', '2018-07-11 11:40:17', 20180002, 9),
(7, 'Troca de toner', 'Resolvido', '2018-07-17 13:56:18', 20180005, 24),
(8, 'Ramal não está funcionando', 'Resolvido', '2018-07-20 20:11:04', 20180005, 12),
(9, 'Câmeras não funcionam ', 'Resolvido', '2018-08-02 14:37:56', 20180003, 5),
(10, 'Sistema do sus travou', 'Resolvido', '2018-08-02 14:54:24', 20180007, 17),
(11, 'Nova imprssora ', 'Resolvido', '2018-08-02 14:34:00', 20180008, 22),
(12, 'Troca de mouse', 'Resolvido', '2018-08-04 15:30:45', 20180001, 6),
(13, 'Troca de toner', 'Resolvido', '2018-08-06 12:30:59', 20180001, 24),
(14, 'Troca de toner', 'Resolvido', '2018-08-06 20:43:55', 20180009, 24),
(15, 'Troca de teclado', 'Resolvido', '2018-08-10 15:33:12', 20180004, 6),
(16, 'Troca de monitor', 'Resolvido', '2018-08-11 16:10:29', 20180005, 6),
(17, 'Email voltou a funcionar', 'Cancelado', '2018-07-09 17:02:23', 20180010, 7),
(18, 'Sistema voltou a funcionar', 'Cancelado', '2018-08-02 14:46:19', 20180011, 17);

--
-- Extraindo dados da tabela `funcionario`
--

INSERT INTO `funcionario` (`matricula`, `nome`, `senha`, `tipo`, `setor_cod`) VALUES
(20180001, 'João Santos Araujo', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 11),
(20180002, 'Maria Almeida Rosa', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 1),
(20180003, 'Thiago Aguiar Lopes', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 25),
(20180004, 'Lucia Pereira Amorim', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 16),
(20180005, 'Kelly Oliveira de Deus', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 27),
(20180006, 'Marcelo Santos Ferraz', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 15),
(20180007, 'Lucas Amaral Lima', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 28),
(20180008, 'Deli Oliveira Neto', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 18),
(20180009, 'Jackson Araujo de Carvalho', 'e7d80ffeefa212b7c5c55700e4f7193e', 'Outros', 13),
(20180010, 'Daniel Moitinho Pereira', 'e7d80ffeefa212b7c5c55700e4f7193e', 'TI', 33),
(20180011, 'Luciano Oliveira Santos ', 'e7d80ffeefa212b7c5c55700e4f7193e', 'TI', 33);

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `descricao`, `quantidade`) VALUES
(1, 'HD', '1 TB', 10),
(2, 'HD', '500 GB', 10),
(3, 'PC', 'i7, 1 TB, Dell, W7', 3),
(4, 'Impressora', 'Hp', 15),
(5, 'Toner', 'Hp', 20),
(6, 'Mouse', 'Hp', 30),
(7, 'Teclado', 'Hp', 30),
(8, 'Estabilizador', ' 220v', 10),
(9, 'Monitor', 'Dell 20 polegadas', 10),
(10, 'Câmeras', 'IntelBras', 10),
(11, 'Cabo de Rede', '100 metros', 2),
(12, 'Cabo telefônico', '100 metros', 2),
(13, 'Conector', 'Para cabo de rede', 200);

--
-- Extraindo dados da tabela `resolve`
--

INSERT INTO `resolve` (`descricao`, `data_hora_vinculo`, `data_hora_resolucao`, `funcionario_matricula`, `chamado_id`) VALUES
('problema solucionado', '2018-08-04 15:33:05', '2018-08-04 15:45:47', 20180010, 12),
('problema solucionado', '2018-08-06 20:45:43', '2018-08-06 20:49:15', 20180010, 14),
('problema solucionado', '2018-08-10 15:37:12', '2018-08-10 15:45:16', 20180010, 15),
('problema solucionado', '2018-08-11 16:19:34', '2018-08-11 16:24:45', 20180010, 16),
('problema solucionado', '2018-07-11 11:41:23', '2018-07-11 11:50:17', 20180011, 6),
('problema solucionado', '2018-07-17 14:12:05', '2018-07-17 15:24:44', 20180011, 7),
('problema solucionado', '2018-07-20 13:58:11', '2018-07-20 20:21:43', 20180011, 8),
('problema solucionado', '2018-08-02 14:33:54', '2018-08-02 14:42:45', 20180011, 9),
('problema solucionado', '2018-08-02 14:40:40', '2018-08-02 15:13:54', 20180011, 10),
('problema solucionado', '2018-08-02 14:37:44', '2018-08-02 14:50:54', 20180011, 11),
('problema solucionado', '2018-08-06 12:36:54', '2018-08-06 12:43:39', 20180011, 13);

--
-- Extraindo dados da tabela `setor`
--

INSERT INTO `setor` (`cod`, `nome`) VALUES
(1, 'ADMINISTRAÇÃO'),
(2, 'ARQUIVO'),
(3, 'ESTAGIÁRIO'),
(4, 'AUDITÓRIA PRON.'),
(5, 'AUTORIZAÇÃO'),
(6, 'AUDITÓRIO'),
(7, 'BIOIMAGEM'),
(8, 'CENTRO CIRÚRG.'),
(9, 'COLONOSCOPIA'),
(10, 'COMERCIAL'),
(11, 'CONTABIL.  RH'),
(12, 'ELETROCARD.'),
(13, 'COOR. ENFERM.'),
(14, 'FARMÁCIA'),
(15, 'FATURAMENTO'),
(16, 'FINANCEIRO'),
(17, 'INTERNAMENTO'),
(18, 'LABORATÓRIO'),
(19, 'LECO'),
(20, 'MANUTENÇÃO'),
(21, 'HOTELARIA'),
(22, 'MARKET. QUAL.'),
(23, 'MÉDICOS'),
(24, 'PABX'),
(25, 'PORTARIA'),
(26, 'POSTO ENFERM.'),
(27, 'RECEPÇÃO'),
(28, 'MARCAÇÃO'),
(29, 'SND'),
(30, 'ULTRASSOM'),
(31, 'URODINÃMICA'),
(32, 'UROFLUXO'),
(33, 'TI'),
(34, 'SERVIDORES');

--
-- Extraindo dados da tabela `tipo_servico`
--

INSERT INTO `tipo_servico` (`cod_servico`, `nome`, `prioridade`) VALUES
(1, 'ALTERAR CPS', 'Baixa'),
(2, 'AVISO DE LENTIDÃO', 'Alta'),
(3, 'DESTRAVAR SAÍDA', 'Baixa'),
(4, 'GERENCIAR USUÁRIO', 'Media'),
(5, 'MANUT. DE CÃMERAS', 'Media'),
(6, 'MANUT. DE COMPUTADOR', 'Alta'),
(7, 'MANUT. DE EMAIL', 'Media'),
(8, 'MANUT. DE IMP/SCAN.', 'Alta'),
(9, 'MANUT. DE INTERNET', 'Alta'),
(10, 'MANUT. OUTROS EQUIP.', 'Baixa'),
(11, 'MANUT. OUTROS PROG.', 'Baixa'),
(12, 'MANUT.DE TEL/RAMAL', 'Baixa'),
(13, 'MANUT. CALL CENTER', 'Alta'),
(14, 'MANUT. DO ECG/MAPA', 'Alta'),
(15, 'MANUT. SISTEMA CPC', 'Alta'),
(16, 'MANUT. SIS. DE PONTO', 'Alta'),
(17, 'MANUT. SIS. DO SUS', 'Baixa'),
(18, 'MANUT. SIS. DOMÍNIO', 'Alta'),
(19, 'MANUT. UROFLUXO MICA', 'Alta'),
(20, 'RETIRAR ALTA', 'Baixa'),
(21, 'SOLICI. DESBLOQUEIOS', 'Baixa'),
(22, 'SOLICI.EQUIPAMENTOS', 'Baixa'),
(23, 'SUPORTE AO USUÁRIO', 'Baixa'),
(24, 'TROCA DE TONER', 'Alta'),
(25, 'UNIFICAR CADASTRO', 'Baixa');

--
-- Extraindo dados da tabela `usou`
--

INSERT INTO `usou` (`chamado_id`, `produto_id`, `quantidade`) VALUES
(5, 4, 1),
(2, 5, 1),
(7, 5, 1),
(8, 5, 1),
(6, 6, 1),
(9, 7, 1),
(10, 9, 1),
(4, 10, 1),
(3, 12, 1),
(1, 13, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
