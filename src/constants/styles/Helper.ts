interface IStyledHelper {
  CenterContent: string;
  CenterContentVertical: string;
}

const StyledHelper: IStyledHelper = {
  CenterContent: `
   display: flex;
   justify-content: center;
   align-items: center;
   `,
  CenterContentVertical: `
   display: flex;
   align-items: center;
   `,
};

export default StyledHelper;
