import './TodoCounter.css';


function TodoCounter({total, completed}) {
    return (
      completed === total ? (
        <h1 className='TodoCounter'>
          IT'S DONE !!!
        </h1>) : (
        <h1 className='TodoCounter'>
          Has completado <span>{completed}</span> de <span>{total}</span> tasks
        </h1>)
    );
  }

  export { TodoCounter };

