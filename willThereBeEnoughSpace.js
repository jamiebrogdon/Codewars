function enough(cap, on, wait) {
  let availableSeats = (on + wait) - cap;
  return on + wait < cap ? 0 : availableSeats;
};
