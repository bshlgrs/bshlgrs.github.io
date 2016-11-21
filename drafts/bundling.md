---
layout: post
title:  "A geometric description of when to bundle goods"
date: 2016-10-29
---

I recently interviewed Chen-Yu Yang at work, and after the interview he scored basically the maximum possible number of unofficial bonus points by looking at my website and emailing me most of the answer to [a question I posed a while ago](https://www.facebook.com/bshlgrs/posts/10208574426092859).

**EDIT: This is wrong!**

My question was, suppose you have a bunch of goods and you want to maximize profit by bundling the goods. (Bundling is the super neat thing where you can increase your profit by selling two products together instead of separately. See the description [here](http://market.subwiki.org/wiki/Price_bundling) if you haven't heard of it before.) How do you efficiently figure out the optimal bundling strategy?

Chen-Yu's insight was that you can interpret bundling as a geometric question. I'm going to explain his insight here, and present the proof that there is no fast algorithm for bundling in a later post. I think this geometric description of bundling is extremely valuable--when I was learning about bundling, I desperately wished that there was a graph somewhere that would have shown me how to picture in my head whether bundling made sense in a given situation. So here goes:

Suppose you have two people, let's call them Buck and Chen-Yu, who have different maximum prices for goods X and Y. We can plot that on a diagram with the two people on different axes:

![](/img/bundling/figure_2.png)

For product X, you can see that Buck is willing to pay $8 for it but Chen-Yu is willing to pay $24. Because Chen-Yu’s price is more than double Buck’s, profit is maximized by setting the price to $24 and only selling to Chen-Yu.

For good Y, where Buck is willing to pay $31 and Chen-Yu is willing to pay $21, the story is different—the two prices are within a factor of 2, so profit is maximized by selling to both.

I’ve drawn the lines C=2B and B=2C onto the graph, and shaded the region outside them. The shaded regions are where it makes sense to sell to only one person; the white region is where you sell to both.

There's an interesting pattern to which consumer's willingness to pay controls the price:

![](/img/bundling/figure_6.png)

As you can see, in the upmost section, only Chen-Yu is buying, and only his willingness to pay affects the sale price. But if Buck's willingness to pay grows within a factor of 2 of Chen-Yu's, then the price will be set to Buck's willingness to pay.

But here’s where it gets really cool: What about the bundle X + Y? We can draw that onto the graph as well:

![](/img/bundling/figure_1.png)

and we see that it’s in the white region. Now let's state a theorem:

**Theorem: If and only if the best strategy for X + Y is to sell to both customers (that is, X + Y is in the white region), bundling is the dominant price scheme.**

Why? The proof is kind of long, so I've put it at the bottom of this post; feel free to read it there.

But this is a really useful explanation of when you want to bundle: only when you want to sell the bundle to both customers!

## Appendix: Proof of the theorem

First let’s prove the **-> direction**--that if X + Y is in the white region, bundling is dominant:

X + Y is in the white region. Let’s assume that Buck’s price is lower than Chen-Yu's price, so we’re going to be charging Buck’s price to both customers. There is no possible way of getting more money out of Buck, because we are already selling him both goods at his maximum price for each good. What about Chen-Yu? Well, we don’t want to raise the price unless Chen-Yu’s price for the bundle is more than 2x Buck’s price, because otherwise we’ll lose Buck’s business. And if Chen-Yu’s price for the bundle was 2x Buck’s price, then we wouldn’t be in the white region! So Buck’s price really is the profit maximizing price. (If Buck’s price is higher than Chen-Yu’s price, you just do the same proof, but with names reversed.)

Now let’s prove the **other direction**: that if bundling is the dominant price scheme overall, you want to sell your bundle to both parties. This is equivalent to: if you don’t want to sell your bundle to both parties, bundling is not the dominant price scheme. Let’s prove that:

Let’s say that Buck’s bundle price is more than double Chen-Yu’s bundle price, so you only want to sell to Buck. Buck values at least one of X or Y more than twice as highly than Chen-Yu does; let’s say it’s X. So if we weren’t bundling, that good should just be sold to Buck.

What price should good Y be sold at? Either Buck's price or Chen-Yu's price. Let's say it's Buck's price. Then it doesn't matter if we bundle or not, because in both cases only Buck will buy both goods, so the price is just his willingness to pay. What about if it's Chen-Yu's price? In that case, you just want to sell it to Chen-Yu and not to Buck, so bundling will actively make your price scheme worse. (If Chen-Yu's price were high enough that it made sense to bundle, then given bundling, we'd want to sell to both people.)

QED.