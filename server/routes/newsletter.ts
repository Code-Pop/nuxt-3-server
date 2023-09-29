export default defineEventHandler(event => {
  return sendRedirect(event, 'my-new-domain.com', 302)
})
