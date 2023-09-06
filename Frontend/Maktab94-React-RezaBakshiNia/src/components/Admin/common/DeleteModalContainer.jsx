const DeleteModalContainer = ({
  productDetailsForModal,
  handleDelete,
  setModalIsOpen,
}) => {
  return (
    <div className="deleteModalContainer">
      <h4>تایید حذف محصول</h4>
      <img
        src={productDetailsForModal && productDetailsForModal.image}
        alt="modal-delete-image"
      />
      <p>
        از حذف محصول {productDetailsForModal && productDetailsForModal.name}{" "}
        اطمینان دارید؟
      </p>
      <button
        id="confrim-btn_delete-Modal"
        onClick={() => {
          handleDelete(productDetailsForModal.id);
          setModalIsOpen(false);
        }}
      >
        حذف شود
      </button>
      <button
        id="cancel-btn_delete-Modal"
        onClick={() => setModalIsOpen(false)}
      >
        لغو
      </button>
    </div>
  );
};

export default DeleteModalContainer;
