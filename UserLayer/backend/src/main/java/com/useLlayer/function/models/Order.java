package com.useLlayer.function.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    // TODO need to be modified as LocalDateTime
    //@NotBlank
    @Size(max = 50)
    private String requestTime;


    @NotBlank
    @Size(max = 100)
    private String title;

    @NotBlank
    @Size(max = 100)
    private String provider;

    @NotBlank
    @Size(max = 50)
    private String dateofDelivery;

    @NotBlank
    @Size(max = 500)
    private String description;

    @NotBlank
    @Size(max = 50)
    private String language;

    @NotBlank
    @Size(max = 500)
    private String learningOutcome;

    @NotBlank
    @Size(max = 500)
    private String learnerEffort;

    @Size(max = 500)
    private String institutionEmail;
    @NotBlank
    @Size(max = 500)
    private String inherentRequirements;

    @NotBlank
    @Size(max = 500)
    private String assessment;

    @NotBlank
    @Size(max = 500)
    private String qualityAssurance;

    @NotBlank
    @Size(max = 100)
    private String price;

    //@NotBlank
    @Column(columnDefinition = "LONGTEXT")
    private String coverPhoto;

    @Size(max = 100)
    private String credit;
    //@NotBlank
    @Size(max = 50)
    private String status;
    @NotBlank
    @Size(max = 100)
    private String DepthofLearning;
    @NotBlank
    @Size(max = 100)
    private String IndustryAlignment;
    @NotBlank
    @Size(max = 100)
    private String IndustryOccupation;
    @NotBlank
    @Size(max = 100)
    private String IndustrySupport;
    @NotBlank
    @Size(max = 100)
    private String Jurisdiction;
    @NotBlank
    @Size(max = 100)
    private String MicrocredentialDate;
    @NotBlank
    @Size(max = 100)
    private String RecommendedPrior;
    @NotBlank
    @Size(max = 100)
    private String Stackability;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;


    public Order() {

    }

    public Order(String requestTime, String title, String provider, String dateofDelivery, String description,
                 String language, String learningOutcome, String learnerEffort, String institutionEmail, String inherentRequirements,
                 String assessment, String qualityAssurance, String price,String coverPhoto, String credit, String status, String DepthofLearning, String IndustryAlignment, String IndustryOccupation, String IndustrySupport, String Jurisdiction, String MicrocredentialDate, String RecommendedPrior, String Stackability) {
        this.requestTime = requestTime;
        this.title = title;
        this.provider = provider;
        this.dateofDelivery = dateofDelivery;
        this.description = description;
        this.language = language;
        this.learningOutcome = learningOutcome;
        this.learnerEffort = learnerEffort;
        this.institutionEmail = institutionEmail;
        this.inherentRequirements = inherentRequirements;
        this.assessment = assessment;
        this.qualityAssurance = qualityAssurance;
        this.price = price;
        this.coverPhoto = coverPhoto;
        this.credit = credit;
        this.status = status;
        this.DepthofLearning=DepthofLearning;
        this.IndustryAlignment=IndustryAlignment;
        this.IndustryOccupation=IndustryOccupation;
        this.IndustrySupport=IndustrySupport;
        this.Jurisdiction=Jurisdiction;
        this.MicrocredentialDate=MicrocredentialDate;
        this.RecommendedPrior=RecommendedPrior;
        this.Stackability=Stackability;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



 

    public String getRequestTime() {
        return requestTime;
    }

    public void setRequestTime(String requestTime) {
        this.requestTime = requestTime;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getCoverPhoto() {
        return this.coverPhoto;
    }

    public void setCoverPhoto(String coverPhoto) {
        this.coverPhoto = coverPhoto;
    }

    public void setLearningOutcome(String learningOutcome) {
        this.learningOutcome = learningOutcome;
    }
    public String getLearningOutcome() {
        return learningOutcome;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setProvider(String provider) {
        this.provider=provider;
    }

    public String getProvider() {
        return provider;
    }
    public void setDateofDelivery(String dateofDelivery) {
        this.dateofDelivery = dateofDelivery;
    }

    public String getDateofDelivery() {
        return dateofDelivery;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getLanguage() {
        return language;
    }
    public void setLearnerEffort(String learnerEffort) {
        this.learnerEffort = learnerEffort;
    }

    public String getLearnerEffort() {
        return learnerEffort;
    }

    public void setInstitutionEmail(String institutionEmail) {
        this.institutionEmail = institutionEmail;
    }

    public String getInstitutionEmail() {
        return institutionEmail;
    }

    public void setInherentRequirements(String inherentRequirements) {
        this.inherentRequirements = inherentRequirements;
    }

    public String getInherentRequirements() {
        return inherentRequirements;
    }
    public void setAssessment(String assessment) {
        this.assessment = assessment;
    }

    public String getAssessment() {
        return assessment;
    }

    public void setQualityAssurance(String qualityAssurance) {
        this.qualityAssurance = qualityAssurance;
    }

    public String getQualityAssurance() {
        return qualityAssurance;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPrice() {
        return price;
    }
    public void setCredit(String credit) {
        this.credit = credit;
    }

    public String getCredit() {
        return credit;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
    public void setDepthofLearning(String DepthofLearning){
        this.DepthofLearning=DepthofLearning;
    }

    public String getDepthofLearning(){
        return DepthofLearning;
    }
    public void setIndustryAlignment(String IndustryAlignment){
        this.IndustryAlignment=IndustryAlignment;
    }

    public String getIndustryAlignment(){
        return IndustryAlignment;
    }
    public void setIndustryOccupation(String IndustryOccupation){
        this.IndustryOccupation=IndustryOccupation;
    }

    public String getIndustryOccupation(){
        return IndustryOccupation;
    }
    public void setIndustrySupport(String IndustrySupport){
        this.IndustrySupport=IndustrySupport;
    }

    public String getIndustrySupport(){
        return IndustrySupport;
    }
    public void setJurisdiction(String Jurisdiction){
        this.Jurisdiction=Jurisdiction;
    }

    public String getJurisdiction(){
        return Jurisdiction;
    }
    public void setMicrocredentialDate(String MicrocredentialDate){
        this.MicrocredentialDate=MicrocredentialDate;
    }

    public String getMicrocredentialDate(){
        return MicrocredentialDate;
    }
    public void setRecommendedPrior(String RecommendedPrior){
        this.RecommendedPrior=RecommendedPrior;
    }

    public String getRecommendedPrior(){
        return RecommendedPrior;
    }
    public void setStackability(String Stackability){
        this.Stackability=Stackability;
    }

    public String getStackability(){
        return Stackability;
    }


    // 省略getter和setter
}
