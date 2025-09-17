<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Our Services</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600">Our Company</h1>
      <nav class="space-x-6">
        <a href="index.html" class="hover:text-blue-600">Home</a>
        <a href="service.html" class="text-blue-600 font-semibold">Services</a>
        <a href="about.html" class="hover:text-blue-600">About</a>
        <a href="contact.html" class="hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Services Grid -->
  <section class="py-16 container mx-auto px-6">
    <div class="grid md:grid-cols-3 gap-10">
      
      <!-- Service Card -->
      <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
        <div class="text-blue-600 text-4xl mb-4">💻</div>
        <h3 class="text-xl font-bold mb-3">Digital Solutions</h3>
        <p class="text-gray-600">
          We design and build scalable digital platforms that connect people and services.
        </p>
      </div>

      <!-- Service Card -->
      <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
        <div class="text-green-600 text-4xl mb-4">📱</div>
        <h3 class="text-xl font-bold mb-3">Mobile Apps</h3>
        <p class="text-gray-600">
          Our team creates intuitive and user-friendly mobile applications for iOS and Android.
        </p>
      </div>

      <!-- Service Card -->
      <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
        <div class="text-purple-600 text-4xl mb-4">🌍</div>
        <h3 class="text-xl font-bold mb-3">Community Services</h3>
        <p class="text-gray-600">
          Empowering local communities with digital tools and support systems for growth.
        </p>
      </div>
    </div>
  </section>

</body>
</html>
