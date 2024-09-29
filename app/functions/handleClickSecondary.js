export const handleClickSecondary = (id, setSecondActive, secondActive ) => {
    secondActive === id ? setSecondActive(null) : setSecondActive(id)
  }