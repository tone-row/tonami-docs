---
sidebar_position: 1
slug: /
hide_title: true
sidebar_label: Introduction
---

import { TwitterTweetEmbed } from "react-twitter-embed";
import { TweetWrapper } from "../src/components/TweetWrapper";

<div style={{textAlign: "center"}}>

# tonami

<img src="/img/logo.svg" className="home-img" alt="Tonami" width={250} />

<p className="intro">tonami is a CSS-in-JS library with a familiar API that uses browser features like <mark>CSS custom properties</mark> for styling dynamic components</p>

</div>

<div className="shields">

[![version][version-badge]][package]
![downloads per month][downloads]
![gzipped size][size]
![test coverage][coverage]

</div>

```shell
yarn add tonami
```

:::caution

Tonami is a work in progress. Until reaching **v1.0.0** the API's may change.

I'm publishing it to gauge interest and gather feedback. If you're interested [join the Discord](https://discord.gg/nbqTWkjM)!

:::

<TweetWrapper>
  <TwitterTweetEmbed tweetId={"1416204983352107008"} />
</TweetWrapper>

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/tonami?style=flat-square
[package]: https://www.npmjs.com/package/tonami
[downloads]: https://img.shields.io/npm/dm/tonami?style=flat-square
[size]: https://img.shields.io/bundlephobia/minzip/tonami?style=flat-square
[coverage]: https://img.shields.io/codecov/c/github/tone-row/tonami?style=flat-square
<!-- prettier-ignore-end -->
