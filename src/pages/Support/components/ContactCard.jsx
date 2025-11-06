import React from 'react'
import { Button, Card, Field, Input, Stack,HStack,Textarea,Checkbox,Link} from "@chakra-ui/react"

const ContactCard = () => {
  return (
    


<Card.Root  maxW="xl" borderRadius="1rem" boxShadow="sm">
    <Card.Header>
      <Card.Title>You will receive response within 24 hours of time of submit.</Card.Title>
    </Card.Header>
    <Card.Body>

      <Stack gap="4" w="full" >

      <HStack spacing={4}>
    <Field.Root>
      <Field.Label>Name</Field.Label>
      <Input placeholder="James" />
    </Field.Root>

    <Field.Root>
      <Field.Label>Surname</Field.Label>
      <Input placeholder="Arthur" />
    </Field.Root>
  </HStack>

       <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="name@mail.com" />
    </Field.Root>

       <Field.Root>
      <Field.Label>Message</Field.Label>
      <Textarea
    placeholder="Your Message"
    rows={3}
    pt="2"
    pl="3"
  />
    </Field.Root>


     <Checkbox.Root>
        <Checkbox.HiddenInput />
        <Checkbox.Control
          borderColor="gray.400"
          bg="white"
          _checked={{
            bg: "purple.500",
            borderColor: "purple.500",
            color: "white", // makes the tick white
          }}
        />
        <Checkbox.Label>
          I agree with{" "}
          <Link href="#" color="purple.500" textDecoration="underline">
            Terms & Conditions
          </Link>
          .
        </Checkbox.Label>
      </Checkbox.Root>


      </Stack>
    </Card.Body>

  <Card.Footer>
  <Stack w="full" gap={3}>
    <Button w="full" borderRadius="md" variant="outline" >
      Send a message
    </Button>
    <Button w="full" borderRadius="md"  bg="purple.500">
      Book a meeting
    </Button>
  </Stack>
</Card.Footer>

     

  </Card.Root>
)



  
}

export default ContactCard
