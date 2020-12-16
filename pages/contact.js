import React from 'react'

export default function ContactForm() {
  return (
    <div>
      <form
        name="test"
        id="test"
        method="POST"
        data-netlify="true"
        action="/landing"
        onSubmit={(e) => {
          e.preventDefault()
          const form = document.getElementById('test')
          console.log(form.data)
        }}
      >
        <p>
          <input type="text" name="firstname" id="firstname" />
          <label htmlFor="yourname">Your Name:</label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">Your Email:</label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">Message:</label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}
