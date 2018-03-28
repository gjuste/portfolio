-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 27 Mars 2018 à 19:28
-- Version du serveur :  5.7.11
-- Version de PHP :  7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `language`
--

-- --------------------------------------------------------

--
-- Structure de la table `lang_en`
--

CREATE TABLE `lang_en` (
  `nom_balise` varchar(50) NOT NULL,
  `balise` varchar(50) NOT NULL,
  `texte` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `lang_en`
--

INSERT INTO `lang_en` (`nom_balise`, `balise`, `texte`) VALUES
('head_description', 'head_description', 'My name is JUSTE Gaétan, and this is my Portfolio. Realised for my studies of MIT in Angoulême, it will show you what i know and what I can do for you.'),
('homePage_h1', '.pt-page-1 > h1', 'My portfolio'),
('title', 'title', 'Portfolio of JUSTE Gaétan');

-- --------------------------------------------------------

--
-- Structure de la table `lang_fr`
--

CREATE TABLE `lang_fr` (
  `nom_balise` varchar(50) NOT NULL,
  `balise` varchar(50) NOT NULL,
  `texte` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `lang_fr`
--

INSERT INTO `lang_fr` (`nom_balise`, `balise`, `texte`) VALUES
('head_description', 'head_description', 'Je m\'appelle JUSTE Gaétan, et voici mon portfolio. Réaliser lors de mes études en MMI à l\'IUT d\'Angoulême, il vous montrera ce que je sais faire et ce que je pourrais faire pour vous.'),
('homePage_h1', '.pt-page-1 > h1', 'Mon portfolio'),
('title', 'title', 'Portfolio de JUSTE Gaétan');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `lang_en`
--
ALTER TABLE `lang_en`
  ADD UNIQUE KEY `nom_balise` (`nom_balise`);

--
-- Index pour la table `lang_fr`
--
ALTER TABLE `lang_fr`
  ADD UNIQUE KEY `nom_balise` (`nom_balise`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
