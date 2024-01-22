import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const ProjectsModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Button variant="primary" onClick={handleShow}>
        Go Now
      </Button>
      <Modal show={show} onHide={handleClose} className="border border-white">
        <Modal.Header closeButton className="border border-white">
          { <Modal.Title>Announcement</Modal.Title> }
        </Modal.Header>
        <Modal.Body className="bg-white text-secondary">
          This is an upcoming section, you will be able to see it soon
          <br />
          Once we are done with the complete Development and website is live
          we'll redirect this call to live website
        </Modal.Body>
        {
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        }
      </Modal>
    </>
  )
}

export default ProjectsModal