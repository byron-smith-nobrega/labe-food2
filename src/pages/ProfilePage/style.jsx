import styled from "styled-components";

export const ProfilePageStyle = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProfileStyle = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
    flex-direction: column;

    span{
      width: 328px;
      height: 18px;      
      font-size: 16px;
      margin-top: 10px;
      margin-left: 16px;

      :nth-child(1){
        margin-top: 20px;
      }
    }
  }
  
  img{
    width: 24px;
    height: 24px;
    margin-top: 20px;
    margin-right: 16px;
  }
`
export const AdressStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-height: 76px;
  margin: 16px 0;
  padding: 16px;
  background-color: #eee;
    
  div{
    display: flex;
    flex-direction: column;

    span{
      :nth-child(1){
        width: 328px;
        height: 18px;
        margin: 0 0 5px;
        font-size: 16px;
        color: var(--greyish);
      }

      :nth-child(2){
        width: 328px;
        height: 18px;
        margin: 5px 0 5px 0;
        font-size: 16px;
      }
    }
  }
 
  img{
    width: 24px;
    height: 24px;
  }
`
export const StyleHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-bottom: 60px;

span{
  width: 88vw;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  border-bottom: solid 1px var(--black);
}
h4 {
  width: 88vw;
  margin: 0 0 7px;
  font-family: Roboto;
  font-size: 16px;
  padding-bottom: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  border-bottom: solid 1px var(--black);
}
p{
  margin: 2% 0;
  width: 88vw;
  margin: 28px 0px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
}
`