const Contact = () => {
  return (
    <div className="my-9 p-5 w-6/12 m-auto rounded-3xl bg-gray-300 shadow-lg shadow-blue-400">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>

      <div className="flex my-2">
        <div className="mx-3">
          <h1 className="font-semibold py-2 text-lg">First Name</h1>
          <input type="text" placeholder="First Name" className="border-white border rounded-lg"/>
        </div>

        <div className="mx-7">
          <h1 className="font-semibold py-2 text-lg">Last Name</h1>
          <input type="text" placeholder="Last Name" className="border-white rounded-lg"/>
        </div>
      </div>

      <div className="m-3">
        <h1 className="font-semibold py-2 text-lg">Email</h1>
        <input type="email" placeholder="Please enter vaild Email" className="border-white rounded-lg" />
      </div>

      <div className="m-3">
        <h1 className="font-semibold py-2 text-lg">Message</h1>
        <input type="text" placeholder="Type your message here...." className="h-28 w-96 border-white rounded-lg"/>
      </div>

      <div className="flex justify-center">
        <button className="font-semibold rounded-lg mt-2 mb-1 py-2 px-10 border-white bg-blue-600 text-white text-lg hover:bg-blue-500">
          Let's Talk</button>
      </div>

    </div>
  )
};

export default Contact;