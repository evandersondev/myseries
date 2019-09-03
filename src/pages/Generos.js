import React, { useState, useEffect } from 'react';
import api from '../services/api'
import { Redirect } from 'react-router-dom'

export default function Generos() {
  const [series, setSeries] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    async function load() {
      const response = await api.get('/serie')
      const data = await response.data.docs

      setSeries(data)
    }
    load()
  }, [])

  const deleteSerie = async (id) => {
    await api.delete(`/serie/${id}`)
    setLoad(true)
  }

  if (load) {
    return <Redirect to='#/generos' />
  }

  if (series.length === 0) {
    return (
      <div className='container'>
        <h1>Series</h1>
        <div className='alert alert-warning' role='alert'>
          Vôce não possui séries para listar
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1 className='mb-3'>Series</h1>
      <table className='table table-striped text-center'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Season</th>
            <th scope='col'>Episode</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {series.map(res => {
            return (
              <tr key={res._id}>
                <td>{res.title}</td>
                <td>{res.description}</td>
                <td>{res.season}</td>
                <td>{res.episode}</td>
                <td className='btn-group'>
                  <a href={`#/edite/${res._id}`} className='btn btn-info btn-sm'><i>Edite</i></a>
                  <button onClick={() => deleteSerie(res._id)} className='btn btn-danger btn-sm'><i>Delete</i></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
