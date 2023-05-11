import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReservations } from '../../redux/appointment/reservationsSlice'
const Cards = ({ reservation }) => {
  return (

    <div class="col-sm-6" key={reservation.id}>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{reservation.city}</h5>
          <p class="card-text"> {reservation.appointment_date} </p>
          <a href="#" class="btn btn-primary">Cancel Reservation</a>
        </div>
      </div>
    </div>
  )
}
function Reservations() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.reservations)
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
      return <Cards reservation={item} key={item.id} />
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