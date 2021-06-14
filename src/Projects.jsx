const Projects=()=>{
  return (
      <div className="card" style={{width:'18 rem'}}>
      <div className="card-body">
        <h2 className="card-title">Projects</h2>
        <h6 className="card-subtitle mb-2 text-muted">Algorithm Visualizer</h6>
        <p className="card-text">It is an interactive online platform thatvisualizes BubbleSort amd Selec-tionSortfrom code. A student learns beer through Visualization. It providesyou to change the size of an array and operation speed.Technologies usedRe-actJs and its libraries</p>
        <a href="https://sorting-visualizer-react01.herokuapp.com/" className="card-link" target="_blank">Application Link</a>
        <a href="https://github.com/ManideepMrUnique/SortingVisualizer-React/tree/master" className="card-link" target="_blank">SourceLink</a>
       <br/>
       <br/>
       <h6 className="card-subtitle mb-2 text-muted">Student details management</h6>
        <p className="card-text">It is is a application used to edit student details in a school or college creatingaFaculty Viewwhich can be only accessed by faculty members in college orschool.Built usingPHP,MySql,BootStrap.</p>
        <a href="https://administration-php.herokuapp.com/" className="card-link" target="_blank">Application Link</a>
        <a href="https://github.com/ManideepMrUnique/Administration-PHP/tree/master" className="card-link" target="_blank">SourceLink</a>
      </div>
    </div>
  );
}
export default Projects;