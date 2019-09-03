import React, { useState, useEffect } from 'react';
import api from '../services/api'
import { Redirect } from 'react-router-dom'

const Edite = () => {

  const [form, setForm] = useState({
    title: '',
    description: '',
    season: '',
    episode: ''
  })

  const updateForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const [redirect, setRedirect] = useState(false)
  const id = window.location.href.slice(-24)


  useEffect(() => {
    async function show() {
      const response = await api.get(`/serie/${id}`)
      const data = response.data
      setForm({
        title: data.title,
        description: data.description,
        season: data.season,
        episode: data.episode
      })
    }
    show()
  }, [])

  async function update(e) {
    e.preventDefault()
    const response = await api.put(`/serie/${id}`, {
      ...form
    })
    setRedirect(true)
  }
  if (redirect) {
    return <Redirect to='/generos' />
  }

  return (
    <div className="container">
      <h1>New Serie</h1>
      <form onSubmit={update}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text"
            id='name'
            name='title'
            value={form.title}
            className='form-control'
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description: </label>
          <input type="text"
            id='desc'
            name='description'
            value={form.description}
            className='form-control'
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="season">Season: </label>
          <input type="number"
            id='season'
            name='season'
            value={form.season}
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
            className='form-control'
            onChange={updateForm}
          />
        </div>

        <button className="btn btn-primary mb-2">Update serie</button>
      </form>
    </div>
  )
}

export default Edite
