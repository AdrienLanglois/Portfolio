import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

function ContactForm(){
    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(form); // replace later with email logic
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 700,
        mx: "auto",
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Name */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={form.name}
          onChange={handleChange("name")}
        />

        {/* Email */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={form.email}
          onChange={handleChange("email")}
        />

        {/* Message */}
        <TextField
          label="Message"
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          required
          value={form.message}
          onChange={handleChange("message")}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 1 }}
        >
          Send Message
        </Button>
      </Box>
    </Paper>
  );
}

export default ContactForm;