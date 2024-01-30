const IconSwitch = (props) => {
    const { icon, onSwitch } = props;
    return (
        <i className="material-icons" onClick={() => onSwitch(icon)}>
            {icon}
        </i>
    );
};

export default IconSwitch;
