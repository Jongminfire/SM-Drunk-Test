
import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2';
const ContinueQuestion = (props) => {
    const { onContinue,onFinish } = props;

    Swal.fire({
        title: '조금더 자세한 설문을 해보시겠습니까?',
        showDenyButton: true,
        confirmButtonText: `네`,
        denyButtonText: `아니요`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            onContinue()
        } else if (result.isDenied) {
            onFinish()
        }
      })
    
    return <div></div>;
};

export default ContinueQuestion;