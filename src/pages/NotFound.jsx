import { Button, Section } from "../components/UI";

export default function NotFound() {
  return (
    <Section className="py-32 text-center">
      <p className="font-serif text-6xl text-olive">404</p>
      <p className="mt-4 text-lg text-muted">
        This page is not on the menu. Let’s take you back to the counter.
      </p>
      <div className="mt-8 flex justify-center">
        <Button to="/">Back to home</Button>
      </div>
    </Section>
  );
}
