/* eslint-disable */

watch(cardsFlipped, async (newFlippedCards, oldFlippedCards) => {
  // 👇 edge case when 3 cards are flipped without being turned back
  if (amountOfCardsFlipped.value > 2) {
    const latestFlippedCard = newFlippedCards.filter(
      objectOne => !oldFlippedCards.some(objectTwo => objectOne.id === objectTwo.id)
    )[0]
    // cardsStopTimer? // prevent automatic flip
    flipCardsBack() // flip unpaired cards manually
    await nextTick() // small hack to allow for 3 cards at the same time
    if (latestFlippedCard) latestFlippedCard.component = XmasCard
  } else if (amountOfCardsFlipped.value === 2) {
    // 👇 matching cards?
    if (cardsFlipped.value[0].id === cardsFlipped.value[1].id) {
      cardsFlipped.value.map(card => (card.paired = true)) // matched! ✅
    } else {
      // cardsFlipStartTimer? // not matched ❌
    }
  }
})
