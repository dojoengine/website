---
title: "ZZZ: Test Code"
subtitle: "A short description of the tests"
date: "2023-03-01"
tags: ["developer", "science", "gaming", "zk"]
author: Tony Katana
author_desc: "John Smith the blog author of Autonomous Worlds on Chain Gaming. With a passion for blockchain technology..."
author_img: "/article-images/authors/dojo-ninja.png"
category: "autonomous worlds"
cover: "/article-images/dojo-girl.jpg"
---

## Tests rehype-react

Gaming has come a long way since its inception. With the advent of blockchain technology, the gaming industry has seen a massive surge in innovation and creativity. On-chain gaming is a new way to play games that utilizes the power of blockchain technology to create a secure, transparent, and decentralized gaming experience. With on-chain gaming, players can trust that their data is secure, their transactions are transparent, and their gaming experience is completely decentralized. On-chain gaming is the future of gaming, and it's here to stay.

Here is some sample code :

```rust
#[derive(Model, Copy, Drop, Serde)]
struct Drug {
    #[key]
    game_id: u32,
    #[key]
    player_id: ContractAddress,
    #[key]
    drug_id: DrugEnum,
    quantity: usize,
}
```

## Images

image : 

![](/article-images/abstract.png)

image 2 : 

/article-images/dojo-girl.jpg

image 3 : 

<img src="/article-images/dojo-girl.jpg" />


## H2 styles

**bold** and *italic*

### H3 style

---

ordered list
1. model
2. contract
3. dojo

---

unordered list
- model
- contract
- dojo

---


#### H4 style

image 

[img link](/article-images/abstract.png)

<img src="/article-images/abstract.png" />

link: [dojo book](https://book.dojoengine.org/) 

That is so funny! :joy:

### This is h3

Gaming has come a long way since its inception. With the advent of blockchain technology, the gaming industry has seen a massive surge in innovation and creativity.

```rust
#[dojo::contract]
mod player_actions {
    use starknet::{ContractAddress, get_caller_address};
    use super::{Position, Vec2};
    use super::IPlayerActions;

    #[external(v0)]
    impl PlayerActionsImpl of IPlayerActions<ContractState> {
        fn spawn(self: @ContractState) {
            // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // get player address
            let player = get_caller_address();

            // dojo command - get player position
            let position = get!(world, player, (Position));

            // dojo command - set player position
            set!(world, (Position { player, vec: Vec2 { x: 10, y: 10 } }));
        }
    }
}
```


# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| 1 | 2 | 3 | 4 |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
