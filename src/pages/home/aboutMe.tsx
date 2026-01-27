import { Box, Container, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "white"
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" gutterBottom>
                Hey, I'm   <span style={{ color: '#FF5733', fontWeight:'bold'}}>Adrien</span>{" "}
            </Typography>

            <Typography variant="h4" sx={{ mb: 3 }}>
                  <span style={{ color: "#FF5733" }}>Full Stack</span>{" "} Developer
            </Typography>

            <Typography variant="h6">
                I discovered my passion for programming at the age of 14 when I coded my
                first video game. Today, I have expanded my skills to include IT development in
                general, with the ambition of working in this field. Passionate, curious, and
                independent, I am perfectly capable of adapting to different situations and dealing with
                complex problems.
            </Typography>
          </Box>

          <Box sx={{ flex: 1, textAlign: "right" }}>
            <Box
              component="img"
              src="src/assets/react.svg"
              alt="A picture of me"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
