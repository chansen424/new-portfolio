---
title: "What Is Buddy Reads?"
date: "2021-08-02"
---

# What Is Buddy Reads?
[Buddy Reads](https://buddy-reads-frontend.vercel.app) is a platform that allows you to chat with your friends about books, TV shows, and movies spoiler-free.

# How Does It Work?
By associating how far into a book or show you are with your messages, Buddy Reads is able to filter out any messages that may contain spoilers. For example, if you are 60% through Slaughterhouse Five, you will only see messages sent by your friends when they were 60% (or less) through the novel.

## How Does It Work… Technically?
### Introducing the Stack
The backend server is written in Typescript, using the Express framework.  Data is stored in AWS’s DynamoDB, which is interacted with via the dynamoose library.

The frontend is written in Typescript, using the NextJS framework. The most important bits of the application use SSR rather than static generation, constructing the pages on request.

### The Good Bits
The spoiler-free functionality is fueled by the “Get Messages By Read” endpoint.

This endpoint takes advantage of an index in the database where reads’ (what I call the chatrooms) ids are the primary key and progress is the sort key. We query this index to get messages associated with the read id where progress is less than or equal to the current user’s progress. We then sort by progress (because it is the sort key) in descending order to ensure that the most recent messages are listed first.

# Where Can This Go Next?
* Syncing progress with entertainment platforms — Kindle, Netflix, Hulu — so that users don’t have to enter their own progress

