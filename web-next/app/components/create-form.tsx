import React from 'react'

const CreateForm = () => {
  
  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          ></label>
        </div>
      </form>
    </div>
  )
}

export default CreateForm