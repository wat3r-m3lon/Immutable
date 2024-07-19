package com.useLlayer.function.payload.response;

import com.useLlayer.function.models.Order;

import java.io.File;
import java.util.List;

public class OrderResponse {
    private String web3StorageAccount;
    private List<Order> orders;
    private List<byte[]> coverPhotos;

    public String getWeb3StorageAccount() {
        return web3StorageAccount;
    }

    public void setWeb3StorageAccount(String web3StorageAccount) {
        this.web3StorageAccount = web3StorageAccount;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public List<byte[]> getCoverPhotos() {
        return coverPhotos;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public void setCoverPhotos(List<byte[]> coverPhotos) {
        this.coverPhotos = coverPhotos;
    }
}
