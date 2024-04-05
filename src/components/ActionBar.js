function ActionBar() {
    return (
      <div className="action-bar">
        <button>Create logical network</button>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
}

export default ActionBar;