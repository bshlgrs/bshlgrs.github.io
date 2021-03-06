---
layout: post
title:  "Evan stuff"
date:   ""
---

- Elimination rules
    - eg of Either
    - or of Nat
- We can’t have negative position types
    - eg
        - `data Nope = Alas (Nope -> Bottom)`
        - `data Set = Collect (Set -> B)`
    - You can derive bottom from Nope
        - These proofs have infinite loops
    - You can get general recursion out of these.
- Elimination rules
    - If you generalize the obvious-looking elimination rule for Either to the elimination rule for Nat, you don’t have an inductive hypothesis. This is okay in Haskell because you can just do a general recursion, but that can infinite loop and leave you unsound. In a dependently typed language, we have to also pass along our inductive hypothesis.
- Infinity filters
    - We want to be able to trust things like $$\exists p. \text{Verifies}_{ZFC}(p, \ulcorner \phi \urcorner)$$, and use them as a proof of $$\phi$$
        - This sometimes leads to contradictions in cases of self reference. This is Godel's incompleteness theorem.
        - The problem with self reference comes around as a result of syntactically valid terms that type check to bottom but which run infinitely.
        - We want to solve that problem.
    - Proposal:
        - $$T_i = \text{ZFC} \cup \{ G_i \rightarrow \exists p. \text{Verifies}_{T_{i+1}}(p, \ulcorner \forall_{j > i}, G_j \urcorner) \rightarrow \forall_{j > i}, G_j\}$$
        - alternative notation:
            - $$T_i = \text{ZFC} \cup \{ G_i \rightarrow \text{CanProve}_{T_{i+1}}(\ulcorner \forall_{j > i}, G_j \urcorner) \rightarrow \forall_{j > i}, G_j\}$$
    - Proof of soundness:
        - Suppose that this system is unsound. There must be a step where we apply a rule and get false things.
        - Assuming ZFC is consistent, the incorrect step must come from the axiom we added. So this is false:
            - $$G_i \rightarrow \text{CanProve}_{T_{i+1}}(\ulcorner \forall_{j > i}, G_j \urcorner) \rightarrow \forall_{j > i}, G_j$$
        - For this implication to be false, the two things on the left have to be true and the thing on the right has to be false.
            - So we have $$G_i$$.
            - And we have $$\text{CanProve}_{T_{i+1}}(\ulcorner \forall_{j > i}, G_j \urcorner)$$.
            - And we have that $$\forall_{j > i}, G_j$$ is false.
            - goal: get to $$\forall_{j > i}, G_j$$
            - subgoal: $$G_{i+1}$$ is unsound
            - TODO: I don't remember how this step works.
    - To prove a false thing from an infinite conjunction, one of the conjuncts must be false. You aren't able to prove bottom the normal way here, because one of your steps has to actually prove the wrong thing. TODO: understand this better.
- Nate wants to make inductive types in the negative position work by adding a stronger requirement in the elimination rule.
    - two steps here--the second is "co-thunks".
- This requires adding a `Quarantine` syntax element.
