const INTERVALO_MINIMO = 1000 * 0.5;

let ultimaVezQueAbriu = -1000000;

export function jaPassouOIntervalo() {
    if(ultimaVezQueAbriu + INTERVALO_MINIMO > millis()) {
        return false;
    }

    ultimaVezQueAbriu = millis();
    return true;
}