import React from "react";

interface BookModalProps {
  coverImage: string;
  title: string;
  author: string;
  synopsis: string; 
  isOpen: boolean;
  onCloseModal: () => void;
}

const BookModal: React.FC<BookModalProps> = ({
  coverImage,
  title,
  author,
  synopsis,
  isOpen,
  onCloseModal,
}) => {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={onCloseModal}
        >     

        <section className="flex justify-center items-center">
        <div
            className="bg-white p-4 rounded-lg shadow-lg flex w-[600px]"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="w-20 m-2">
              <img className="object-contain" src={coverImage} alt="book" />
            </div>
            <div className="flex flex-col p-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="">{author}</p>
              <p className="py-3">{synopsis}</p>

            </div>
            <p className="font-bold text-xl hover:text-sky-800" onClick={onCloseModal}>x</p>  

          </div>
        </section>

        </div>
      )}
    </div>
  );
};

export default BookModal;
