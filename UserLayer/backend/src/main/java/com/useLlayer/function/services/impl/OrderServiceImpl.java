package com.useLlayer.function.services.impl;

import com.useLlayer.function.exception.userResourceNotFoundException;
import com.useLlayer.function.models.Order;
import com.useLlayer.function.payload.request.OrderRequest;
import com.useLlayer.function.payload.request.UpdateOrderStatusRequest;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.payload.response.OrderResponse;
import com.useLlayer.function.repository.OrderRepository;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.services.OrderService;
import com.useLlayer.function.tools.imageProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository OrderRepository;

    @Autowired
    private UserRepository userRepository;

    @Value("${WEB3STORAGE_EMAIL}")
    private String web3StorageAccount;

    @Override
    public ResponseEntity<?> createOrderForUser(Long userId, OrderRequest orderRequest) {
        return userRepository.findById(userId).map(user -> {

            Order order = new Order();
            order.setRequestTime(orderRequest.getRequestTime());
            order.setTitle(orderRequest.getTitle());
            order.setProvider(orderRequest.getProvider());
            order.setDateofDelivery(orderRequest.getDateofDelivery());
            order.setDescription(orderRequest.getDescription());
            order.setLanguage(orderRequest.getLanguage());
            order.setLearningOutcome(orderRequest.getLearningOutcome());
            order.setLearnerEffort(orderRequest.getLearnerEffort());
            order.setInstitutionEmail(orderRequest.getInstitutionEmail());
            order.setInherentRequirements(orderRequest.getInherentRequirements());
            order.setAssessment(orderRequest.getAssessment());
            order.setCredit(orderRequest.getCredit());
            order.setCoverPhoto(orderRequest.getCertification());
            order.setQualityAssurance(orderRequest.getQualityAssurance());
            order.setPrice(orderRequest.getPrice());
            order.setDepthofLearning(orderRequest.getDepthofLearning());
            order.setIndustryAlignment(orderRequest.getIndustryAlignment());
            order.setIndustryOccupation(orderRequest.getIndustryOccupation());
            order.setIndustrySupport(orderRequest.getIndustrySupport());
            order.setJurisdiction(orderRequest.getJurisdiction());
            order.setMicrocredentialDate(orderRequest.getMicrocredentialDate());
            order.setRecommendedPrior(orderRequest.getRecommendedPrior());
            order.setStackability(orderRequest.getStackability());

            //String photoId = new imageProcessor(orderRequest.getCoverPhoto()).getImage();
            //order.setCoverPhoto(photoId);
            order.setUser(user);
            user.addOrder(order);
            userRepository.save(user);
            return ResponseEntity.ok(new MessageResponse("User order request Created successfully!"));
        }).orElseThrow(() -> new userResourceNotFoundException("User", "id", userId));
    }

    @Override
    public ResponseEntity<List<Order>> getOrdersByUserId(Long userId) {
        List<Order> Orders = OrderRepository.findByUserId(userId);
        return ResponseEntity.ok(Orders);
    }

    @Override
    public OrderResponse getOrdersAndFilesByUserId(Long userId) throws IOException {
        List<Order> orders = OrderRepository.findByUserId(userId);
        List<byte[]> coverPhotos = new ArrayList<>();

        for (Order order : orders) {
            //String coverPhotoName = "./UserLayer/userInfo/profilePhotos/" + order.getCoverPhoto();
            //Path path = Paths.get(coverPhotoName);
            //coverPhotos.add(Files.readAllBytes(path));
        }

        OrderResponse response = new OrderResponse();
        response.setWeb3StorageAccount(web3StorageAccount);
        response.setOrders(orders);
        response.setCoverPhotos(coverPhotos);

        return response;
    }

    @Override
    public ResponseEntity<?> updateOrderStatus(Long orderId, UpdateOrderStatusRequest updateOrderStatusRequest) {
        Order order = OrderRepository.findById(orderId)
                .orElseThrow(() -> new userResourceNotFoundException("Order", "id", orderId));

        order.setStatus(updateOrderStatusRequest.getStatus());
        OrderRepository.save(order);

        return ResponseEntity.ok(new MessageResponse("Order status updated successfully!"));
    }

    @Override
    public ResponseEntity<?> deleteOrder(Long orderId) {
        Order Order = OrderRepository.findById(orderId)
                .orElseThrow(() -> new userResourceNotFoundException("Request", "id", orderId));

        OrderRepository.delete(Order);

        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Order> getOrderById(Long orderId) {
        Order order = OrderRepository.findById(orderId)
                .orElseThrow(() -> new userResourceNotFoundException("Order", "id", orderId));
        return ResponseEntity.ok(order);
    }

    @Override
    public ResponseEntity<List<Order>> getOrdersByInstitutionEmail(String institutionEmail) {
        List<Order> orders = OrderRepository.findByInstitutionEmail(institutionEmail);
        return ResponseEntity.ok(orders);
    }

    @Override
    public ResponseEntity<?> updateOrder(Long orderId, OrderRequest orderRequest) {
        Order order = OrderRepository.findById(orderId)
                .orElseThrow(() -> new userResourceNotFoundException("Order", "id", orderId));

        order.setRequestTime(orderRequest.getRequestTime());
        order.setTitle(orderRequest.getTitle());
        order.setProvider(orderRequest.getProvider());
        order.setDateofDelivery(orderRequest.getDateofDelivery());
        order.setDescription(orderRequest.getDescription());
        order.setLanguage(orderRequest.getLanguage());
        order.setLearningOutcome(orderRequest.getLearningOutcome());
        order.setLearnerEffort(orderRequest.getLearnerEffort());
        order.setInstitutionEmail(orderRequest.getInstitutionEmail());
        order.setInherentRequirements(orderRequest.getInherentRequirements());
        order.setAssessment(orderRequest.getAssessment());
        order.setCredit(orderRequest.getCredit());
        order.setCoverPhoto(orderRequest.getCertification());
        order.setQualityAssurance(orderRequest.getQualityAssurance());
        order.setPrice(orderRequest.getPrice());
        order.setDepthofLearning(orderRequest.getDepthofLearning());
        order.setIndustryAlignment(orderRequest.getIndustryAlignment());
        order.setIndustryOccupation(orderRequest.getIndustryOccupation());
        order.setIndustrySupport(orderRequest.getIndustrySupport());
        order.setJurisdiction(orderRequest.getJurisdiction());
        order.setMicrocredentialDate(orderRequest.getMicrocredentialDate());
        order.setRecommendedPrior(orderRequest.getRecommendedPrior());
        order.setStackability(orderRequest.getStackability());

        //String photoId = new imageProcessor(orderRequest.getCoverPhoto()).getImage();
        //order.setCoverPhoto(photoId);
        OrderRepository.save(order);

        return ResponseEntity.ok(new MessageResponse("Order updated successfully!"));
    }
}
