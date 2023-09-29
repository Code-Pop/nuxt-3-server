export default defineEventHandler(async event => {
  try {
    const { pokemon } = event.context.params
    const response = await $fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    )

    console.log(event.context)

    const idealResponse = {
      id: response.id,
      name: response.name,
      sprite: response.sprites.front_default
    }

    return idealResponse
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Can't find the Pokemon!"
    })
  }
})
