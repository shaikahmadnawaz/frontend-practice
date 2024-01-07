import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );

      // using axios
      // const response = await axios.post(
      //   "https://www.greatfrontend.com/api/questions/contact-form",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        alert("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        console.error("Response from server:", await error.response.json());
      }
      alert("Something went wrong");
    }
  };

  return (
    <div className="mx-auto max-w-7xl py-12 md:py-24">
      <h1 className="text-center text-4xl font-bold">Contact Us</h1>

      <form className="flex flex-col space-y-4 mt-8 " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 border-gray-700"
        />

        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 border-gray-700"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex h-64 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 border-gray-700"
        ></textarea>

        <button
          type="submit"
          className="w-full rounded-md bg-black text-white py-3 px-2 font-semibold shadow-md hover:bg-black/90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
