import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReservations } from '../../redux/appointment/reservationsSlice'
const Cards = ({ reservation }) => {
  return (
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100"
      key={reservation.id}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{reservation.name}</h5>
          <p className="card-text">{reservation.city}</p>
        </div>
      </div>
    </div>
  )
}
function Reservations() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.reservationS)
  useEffect(() => {
    dispatch(getReservations())
  }, [dispatch])
  let content
  if (loading === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  if (loading === 'idle') {
    content = data.map((item) => {
      return <Cards Reservation={item} key={item.id} />
    })
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }
  return <div className="row">{content}</div>
}
export default Reservations