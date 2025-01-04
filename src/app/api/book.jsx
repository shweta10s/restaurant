const Booking = require('./models/Booking');

app.post('/api/bookings', async (req, res) => {
  try {
    const { date, time, guests, name, contact } = req.body;

    if (!date || !time || !guests || !name || !contact) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBooking = new Booking({ date, time, guests, name, contact });
    await newBooking.save();

    res.status(201).json({ message: 'Booking created', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
