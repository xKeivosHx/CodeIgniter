<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once (APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Prueba extends REST_Controller {
    public function index()
        {
            echo "Hola";
        }

	public function obtener_arreglo_get($index = 0){
        if ($index > 2){
            $respuesta = array('Error: ' => TRUE, 'mensaje'=> 'No existe elemento con las posición: '. $index);
            // echo json_encode($arreglo[$index]);
            $this->response($respuesta, REST_Controller::HTTP_NOT_FOUND);
        }
        else {
            $arreglo = array("Manzana", "Pera", "Naranja");
            $respuesta = array('Error:' => FALSE, 'La fruta encontrada es: ' => $arreglo[$index]);
            $this->response($respuesta);
        }
    }
    
    public function obtener_producto_get($codigo){
        $this->load->database();
        $query = $this->db->query("SELECT * FROM `PRODUCTOS` WHERE CODIGO ='".$codigo. "'");
        echo json_encode($query->result());
    }
}
