package CallCenter.Client;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

@RequiredArgsConstructor
public class ClientService {
    private final ClientRespository clientRespository;

    public List<Client> findAll() {
        return clientRespository.findAll();
    }

    public Optional<Client> findById(Long id) {
        return clientRespository.findById(id);
    }

    public Client save(Client stock) {
        return clientRespository.save(stock);
    }

    public void deleteById(Long id) {
        clientRespository.deleteById(id);
    }
}
