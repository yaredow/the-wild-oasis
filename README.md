<div align="center">

  <img src="/public/logo-dark.png#gh-dark-mode-only" alt="logo" width="200" height="auto" />
  <img src="/public/logo-light.png#gh-light-mode-only" alt="logo" width="200" height="auto" />
  <br/>
  <br/>
</div>

# The Wild Oasis

The Wild Oasis is a full-stack web application that allows users to explore, book, and review nature retreats around the world. It uses React, React Query, Styled Components, React Hook Form, Supabase, and Chart.js to create a modern and responsive user interface. The application also features authentication, dark mode, and data visualization.

## Features

1. **User Authentication and Signup:**

   1. Hotel employees can log in to the application to perform tasks.
   2. New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.

2. **User Profile Management:**

   1. Users can upload an avatar to personalize their profile.
   2. Users can change their name and password.

3. **Cabin Management:**

   1. The app provides a table view with all cabins.
   2. The table view displays cabin information, including cabin photo, name, capacity, price, and current discount.
   3. Users can update or delete existing cabins.
   4. Users can create new cabins, including the ability to upload a photo.

4. **Booking Management:**

   1. The app provides a table view with all bookings.
   2. The table view displays booking information, including arrival and departure dates, booking status, paid amount, cabin details, and guest data.
   3. Booking status can be "unconfirmed," "checked in," or "checked out."
   4. The table view is filterable by booking status.
   5. Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast was booked and its price.

5. **Booking Operations:**

   1. Users can delete, check in, or check out a booking as the guest arrives.
   2. On check-in, users can accept payment outside the app and then confirm the payment within the app.
   3. Guests can add breakfast for the entire stay during check-in if they haven't already.

6. **Guest Data Management:**

   1. Guest data contains full name, email, national ID, nationality, and a country flag for easy identification.

7. **Dashboard:**

   1. The initial app screen serves as a dashboard displaying important information for the last 7, 30, or 90 days.
   2. It shows a list of guests checking in and out on the current day, and users can perform tasks related to these activities from the dashboard.
   3. The dashboard provides statistics on recent bookings, sales, check-ins, and occupancy rates.
   4. It includes a chart showing all daily hotel sales, distinguishing between "total" sales and "extras" sales (only breakfast at present).
   5. There's also a chart displaying statistics on stay durations, an important metric for the hotel.

8. **Application-wide Settings:**

   1. Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

9. **Dark Mode:**
   1. The app includes a dark mode option for a different visual appearance and enhanced user experience in low-light conditions.

## :camera: Screenshots

<kbd><img width="890" alt="login" src="https://github.com/sudeepmahato16/the-wild-oasis/assets/122378993/6648f02d-fb01-46ac-810c-fa47066e83ff"></kbd>

<kbd><img width="957" alt="dashboard" src="https://github.com/sudeepmahato16/the-wild-oasis/assets/122378993/77754290-4df7-42ee-9e13-66748d596cff"></kbd>

<kbd><img width="956" alt="bookings" src="https://github.com/sudeepmahato16/the-wild-oasis/assets/122378993/fa04e745-4b44-41d9-b293-53c63545ea9b"></kbd>

<kbd><img width="957" alt="single-booking" src="https://github.com/sudeepmahato16/the-wild-oasis/assets/122378993/33d830fd-6887-467e-b79f-cab427f33680"></kbd>
