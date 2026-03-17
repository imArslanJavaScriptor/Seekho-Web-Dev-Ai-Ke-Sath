
const PracticeTwo = () => {
  const name = "Arslan"
  const age = 20
  const skills = ['HTML', 'CSS', 'JS', 'React', 'TS']
  const isStudent = true

  return (
    <>
    <h1>Mera Portfolio</h1>
    <p>Name: {name}</p>
    <p>Age: {age} - Agle saal: {age + 1}</p>
    {age >= 18 && <p>Main adult hun!</p>}
    <p>Status: {isStudent ? "Student hun" : "Working hun"}</p>

    <h2>Meri Skills</h2>
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>

    <p style={{color: 'green', fontWeight: 'bold'}}>React seekhna shuru kar diya! 🎉</p>
    </>
  )
};

export default PracticeTwo;
