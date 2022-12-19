# Advent of Vue 2022 ~ Memory game

![How the game looks](https://user-images.githubusercontent.com/5133074/205971373-ec0522aa-355b-4d4f-994f-52868dc88367.png "Memory game")

## If you didn't get here from an email, read this section! Skip it otherwise.

[Advent Of Vue](https://adventofvue.com) is a series of 24 Vue coding challenges that are sent out every day from December 1 to December 24 via [a dedicated newsletter](https://www.getrevue.co/profile/AdventOfVue). If you'd like to receive more of these puzzles in the future, go ahead and sign up!

## What is already done ℹ️

I've already installed a few packages for this exercise:
- [js-confetti](https://github.com/loonywizard/js-confetti) when the game is won
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) so that you don't need to import any `.vue` components
- [unplugin-icons](https://github.com/antfu/unplugin-icons) + the corresponding iconify pack to have a cute X-mas set of icons (+ their correspoding import in `icons.js`)
- [vue-use](https://github.com/vueuse/vueuse/tree/main/packages/core) for a handy [`useTimeout` composable](https://vueuse.org/shared/usetimeout/#usetimeout)

There is also a basic ESlint + Prettier configuration in case you want to run this challenge locally.

The Vite configuration is also ready to be used, no need to do that yourself.

The markup is also also ready, you may change it to adapt to your liking. The purpose is to be able to use some hardcoded data to build the game (given in the comments) in case you have a hard time.

CSS? I'm sure you're amazing with it already. That's why I didn't wanted to make you the affront of asking such task. BOOM, done too! 🎨

## Problem description

We want to make a memory game, like when you deploy your app on Netlify and wait patiently while it builds. The game consists of making pairs of cards.

You want to see how it looks in action? [Here you go](https://creative-cocada-31db9b.netlify.app/)! 🎁

Steps to achieve that one:
- [ ] follow the 8 todos located in `/src/App.vue`
- [ ] use some packages/components imported at the beginning of the file for the exercise, be curious!
- [x] some parts are already done for you, so can just enjoy! 🏖️🍸☀️


## Hints

The hardest part (todo #6) in `/src/hint.js`. ☘️

## Author

Hello dear challenger! 👋

My name is _kissu_ aka Konstantin BIFERT. 🍉

I love to help people daily [on Stackoverflow](https://stackoverflow.com/users/8816585/kissu?tab=summary), creating challenges for you folks 😋 and also trying to get into the [YouTube game](https://kissu.video/). 🎥

I'm [on Twitter](https://twitter.com/kissu_io) and [on Mastodon](https://mas.to/@kissu), otherwise you can check my work [in progress portfolio](https://kissu.io/) too. 🙈

## Credits

[Edit on StackBlitz ⚡️](https://stackblitz.com/github/kissu/aov-22-memory?file=README.md)
