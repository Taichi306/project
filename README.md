# ゲームでマッチング

## コンセプト
好きなゲームを一緒にやる仲間が見つかる！

## アプリ概要
ゲーム好きのためのマッチングアプリ。
ゲームとレベルでユーザを検索でき、フォローを通じてつながることが可能
グループが作成でき、そのグループや一対一でトークができる。

## 開発の背景
コロナ禍で友人を作る機会が減少したので、それを手助けするアプリを作りたいと思い開発しました。
チーム内にゲームが好きな人が多かったのでゲームに特化させました。

## 開発人数
4人

## 開発期間
2ヶ月

## 使用技術
- HTML
- CSS
- JavaScript
- Python(Flask)
- Docker
- WebSocket
- MySQL

## テーブル設計
CREATE TABLE IF NOT EXISTS Profiles(
  id int PRIMARY KEY AUTO_INCREMENT,
  nickname varchar(20) NOT NULL,
  password varchar(20) NOT NULL,
  email varchar(50) NOT NULL,
  comment varchar(500) DEFAULT "Hello World!",
  icon varchar(100) DEFAULT "static/default_user_icon.png"
);


CREATE TABLE IF NOT EXISTS Game_names (
  id int PRIMARY KEY AUTO_INCREMENT,
  game_name varchar(30)
);

CREATE TABLE IF NOT EXISTS Games (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int NOT NULL,
  game_id int NOT NULL,
  FOREIGN KEY(user_id) REFERENCES Profiles(id),
  FOREIGN KEY(game_id) REFERENCES Game_names(id),
  game_level int DEFAULT 0,
  game_order int DEFAULT 1
);

CREATE TABLE IF NOT EXISTS Follows (
  id int PRIMARY KEY AUTO_INCREMENT,
  follow_id int NOT NULL,
  followed_id int NOT NULL,
  FOREIGN KEY(follow_id) REFERENCES Profiles(id),
  FOREIGN KEY(followed_id) REFERENCES Profiles(id)
);

CREATE TABLE IF NOT EXISTS Groups (
  id int PRIMARY KEY AUTO_INCREMENT,
  group_name varchar(100),
  group_icon varchar(100),
  flag_group boolean DEFAULT false
);

CREATE TABLE IF NOT EXISTS Members (
  id int PRIMARY KEY AUTO_INCREMENT,
  member_id int NOT NULL,
  flag_join boolean DEFAULT false,
  group_id int NOT NULL,
  FOREIGN KEY(member_id) REFERENCES Profiles(id),
  FOREIGN KEY(group_id) REFERENCES Groups(id)
);

CREATE TABLE IF NOT EXISTS Messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  sender_id int NOT NULL,
  group_id int NOT NULL,
  message varchar(500),
  time timestamp,
  FOREIGN KEY(sender_id) REFERENCES Profiles(id),
  FOREIGN KEY(group_id) REFERENCES Groups(id)
);

CREATE TABLE IF NOT EXISTS Clicks (
  id int PRIMARY KEY AUTO_INCREMENT,
  click_id int NOT NULL,
  clicked_id int NOT NULL,
  flag int NOT NULL,
  time_ varchar(15),
  FOREIGN KEY(click_id) REFERENCES Profiles(id),
  FOREIGN KEY(clicked_id) REFERENCES Profiles(id)
);