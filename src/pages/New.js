import React, { useState } from 'react';
import api from '../services/api'
import { Redirect } from 'react-router-dom'

const New = () => {

  const [form, setForm] = useState({
    title: '',
    description: '',
    season: '',
    episode: ''
  })

  const [success, setSuccess] = useState(false)

  const updateForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const store = async (e) => {
    e.preventDefault()
    const response = await api.post('/serie', { ...form })
    setSuccess(true)
    console.log(response)
  }

  if (success) {
    return <Redirect to='/generos' />
  }

  return (
    <div className="container">
      <h1>New Serie</h1>
      <form onSubmit={store}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text"
            id='name'
            name='title'
            placeholder='Write the name tv series'
            className='form-control'
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description: </label>
          <input type="text"
            id='desc'
            name='description'
            placeholder='Write a some description'
            className='form-control'
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="season">Season: </label>
          <input type="number"
            id='season'
            name='season'
            placeholder="What do season you're?"
            className='form-control'
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="episode">Episode: </label>
          <input type="number"
            id='episode'
            name='episode'
            value={form.episode}
            placeholder="What do episode you're"
            className='form-control'
            onChange={updateForm}
          />
        </div>

        <button className="btn btn-primary mb-2">Insert new serie</button>
      </form>
    </div>
  )
}

export default New
