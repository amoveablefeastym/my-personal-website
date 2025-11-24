// src/components/Section.jsx

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}
// A simple Section component that takes an id, title, and children as props.
// It renders a section element with a title and any nested content passed as children.
// props: id (string), title (string), children (React nodes)
// they are input to a component to customize its content and behavior.

// children: the content nested inside the Section component when used.
// For example:
// <Section id="about" title="About Me">
//   <p>This is the about me section.</p>
// </Section>
// Here, the paragraph is passed as children to the Section component.

export default Section
