export const CheckboxStyle = () => ({
  root: {
    color: "white",
    paddingRight: "15px",
    "&:hover": {
      backgroundColor: "transparent!important",
    },
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "white"
    }
  },
})

export const Configuration = () => ({
  root: (props: { transform: number }) => ({
    transform: "scale(" + props.transform.toString() + ")",
  }),
});
